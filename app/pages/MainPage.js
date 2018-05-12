import React from "react"

import {
    Container,
    Content,
    Header,
    Body,
    Title,
    Button as NativeBaseButton,
    Text,
    Tab,
    Tabs,
    TabHeading,
    Icon,
    Left,
    Right,
    Footer,
    FooterTab, View
} from 'native-base'

import {connect} from "react-redux"
import ToastExt from "../libs/ToastExt"
import {Modal} from "../components/modal/Modal"
import {ModeTypes} from "../db/format"
import {WordModel} from "../config/model"
import * as R from "ramda"
import styles from "./mainPageStyles"
import {withStyle} from "../libs/withStyle"

const buttonStyles = {
    height: 60,
    marginBottom: 5,
}
const Button = withStyle(buttonStyles)(NativeBaseButton)

const StatusContainer = withStyle({
    flexDirection: "row",
    justifyContent: "space-between"
})(View)

const MainPage = ({history, location, activeConfig}) => (
    <Container>
        <Header>
            <Body>
            <Title>Przyjazne Linie - Menadzer</Title>
            </Body>
        </Header>
        <View style={styles.content}>
            <View style={styles.buttonsContainer}>
                <StatusContainer>
                    <Text>Aktywna konfiguracja: </Text>
                    <Text>{activeConfig.name} ({activeConfig.mode === ModeTypes.learning ? "uczenie" : "test"})</Text>
                </StatusContainer>
                <View>
                    <Button block light onPress={() => {
                        history.push("/configurations")
                    }}>
                        <Text>Konfiguracje</Text>
                    </Button>
                    <Button block light onPress={() => {
                        history.push(`/resources/${WordModel.name}`)
                    }}>
                        <Text>Zasoby</Text>
                    </Button>
                </View>
                <Button full light onPress={() => {
                }}>
                    <Text>Przejdź do aplikacji</Text>
                    <Icon name="arrow-round-forward"/>
                </Button>
            </View>
        </View>
    </Container>
)

const stateToProps = ({configurations}) => ({
    activeConfig: {
        id: configurations.active.id,
        mode: configurations.active.mode,
        name: R.propOr('Brak', "name", configurations.all.find(config => config.id === configurations.active.id))
    }
})

export default connect(stateToProps)(MainPage)