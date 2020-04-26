import React, { Component, useState } from "react";
import Modal from 'react-native-modal';
import { Button, View, Text } from "react-native";
import { Flex, Checkbox, Row } from "@ant-design/react-native";

const AdjustLabel = ({
    fontSize, text, style, numberOfLines
  }) => {
    const [currentFont, setCurrentFont] = useState(fontSize);
  
    return (
      <Text
        numberOfLines={ numberOfLines }
        adjustsFontSizeToFit
        style={ [style, { fontSize: currentFont }] }
        onTextLayout={ (e) => {
          const { lines } = e.nativeEvent;
          if (lines.length > numberOfLines) {
            setCurrentFont(currentFont - 1);
          }
        } }
      >
        { text }
      </Text>
    );
};

class Task extends Component {

    // onTouch = () => {

    // }

    findColor = (category) => {
        color = '#88888855';
        switch (category) {
            case 'Gardening':
                color = '#7CFC0055';
                break;
            case 'Household':
                color = '#C0C0C055';
                break;
            case 'Personal':
                color = '#DC143C55';
                break;
            case 'Shopping':
                color = '#4169E155';
                break;
            case 'Technology':
                color = '#FF634755';
                break;
            case 'Transportation':
                color = '#8B451355';
                break;
            default:
                color = '#800080';
        }
        return color;
    }

    state = {
        isModalVisible: false,
    };
    
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };



    render(props) {
        return (
            <View onTouchEnd={this.toggleModal} style={{ ...this.props.style, height: 65, backgroundColor: this.findColor(this.props.task.category), borderRadius: 20, justifyContent: 'center', }}>
                <Modal isVisible={this.state.isModalVisible} backdropColor="white" backdropOpacity={1}>
                    <View>
                        <Flex direction="column" align="center">
                            <View style={{backgroundColor: this.findColor(this.props.task.category),  borderRadius: 25, alignSelf: 'flex-start', marginBottom: 10, width: "100%"}}>
                                <AdjustLabel fontSize={28} text={this.props.task.title} style={{ textAlign: "left", fontFamily: 'Avenir-Light', marginLeft: 25, marginTop: 15, marginRight: 25, textAlign: "center"}} numberOfLines={2}></AdjustLabel>
                                <Text style={{ textAlign: "left", fontSize: 20, fontFamily: 'Avenir-Light', marginLeft: 25, marginTop: 10, marginRight: 25, marginBottom: 15}}>{this.props.task.description}</Text>
                                
                            </View>
        
                            <Button title="Hide description" onPress={this.toggleModal}></Button>
                        </Flex>
                    </View>
                </Modal>
                <Flex elevation={5} direction="row" justify="between" align="center" style={{ padding: 16 }}>
                    <View style={{ width: '15%' }}>
                        <Checkbox />
                    </View>
                    <AdjustLabel fontSize={16} text={this.props.task.title} style={{ width: '65%', textAlign: 'left', fontFamily: 'Avenir-Light' }} numberOfLines={1}></AdjustLabel>
                    <Text style={{ width: '10%', fontFamily: 'Avenir-Heavy' }}>{this.props.task.pointValue}</Text>
                </Flex>
            </View>
        )
    };
}

export default Task;