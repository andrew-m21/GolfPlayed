var React = require('react');
var ReactNative = require('react-native');
var FadeInView = require('./fade_in_view');
var { Modal, StyleSheet, TouchableOpacity, View } = ReactNative;

export default class ActionModal extends React.Component {
  render() {
    return (
      <FadeInView visible={this.props.modalVisible} backgroundColor={this.props.backgroundColor}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={this.props.onCancel}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.container} onPress={this.props.onCancel}></TouchableOpacity>
            {this.props.children}
          </View>
        </Modal>
      </FadeInView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    padding: 8,
    paddingBottom: 0,
    justifyContent: "flex-end"
  }
});
