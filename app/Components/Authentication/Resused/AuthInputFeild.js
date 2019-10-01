import {TextInput,View,StyleSheet} from 'react-native'
import FontUtils from '../../../utils/FontUtils'
import _  from  'lodash'
import React from 'react'
const ORIGIN_INPUT_MARGIN = 5;
const ORIGIN_INPUT_HEIGHT = 12;
const TEXT_INPUT_MIN_HEIGHT =  35;
const TEXT_INPUT_MAX_HEIGHT = ORIGIN_INPUT_MARGIN * 8 + ORIGIN_INPUT_HEIGHT * 5;

export default class InputBox extends React.PureComponent {
    static propTypes = {
        enabled: React.PropTypes.bool,
        onSend: React.PropTypes.func.isRequired,
        attachFile: React.PropTypes.func.isRequired,
        placeholder:React.PropTypes.string
    };

    static defaultProps = {
        enabled: false,
    };

    constructor(props) {
        super(props);
        this.onSend = this.props.onSend.bind(this);
        this.attachFile = this.props.attachFile.bind(this);
        this.state = { textInputHeight: TEXT_INPUT_MIN_HEIGHT, textValue: null };

    }

    get text() { return this.state.textValue; }

    clear = () => this.setState({ textValue: null });
    focus = () => this.textInput.focus();

    onContentSizeChange = event => {
        const { height } = event.nativeEvent.contentSize;
        const newHeight = _.min([
            _.max([
                height + ORIGIN_INPUT_MARGIN,
                TEXT_INPUT_MIN_HEIGHT,
            ]),
            TEXT_INPUT_MAX_HEIGHT,
        ]);
        this.setState({ textInputHeight: newHeight });
    };

    render() {
        const { enabled } = this.props;
        const placeholder1 = enabled
            ? 'Type a message...'
            : 'You can not reply to this sender';
        console.log(`${enabled}`);
        return (
            <View style={styles.container}>
                <View style={[styles.textInputWrapper, enabled && styles.textInputWrapperEnabled]}>
                    <TextInput
                        editable={enabled}
                        multiline
                        onChangeText={text => this.setState({ textValue: text })}
                        placeholder={placeholder}
                        ref={ref => this.textInput = ref}
                        style={[styles.textInput, { height: this.state.textInputHeight }]}
                        underlineColorAndroid="transparent"
                        value={this.state.textValue}
                        //onKeyPress={text => this.setState({ textValue: text })}
                    />
                </View>


                {enabled &&
                (
                    <Button
                        containerStyle={styles.sendButtonContainer}
                        onPress={this.onSend}
                        style={styles.sendButtonText}
                    > <Image
                        style={styles.attachMentButtonStyle}
                        source={require('../../../Images/AuthImages/clearBtn.png')}
                    />
                    </Button>
                )}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flexDirection: 'row',
        paddingVertical: 6,

    },
    textInputWrapper: {
        alignItems: 'center',
        borderColor: '#E3E4E7',
        borderRadius: 3,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor:'white',
    },
    textInputWrapperEnabled: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 0,
        borderRightWidth: 0,
    },
    attachMentButtonStyle:{

        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        height: 20,
        width : 20,

    },
    textInput: FontUtils.build({
        color: '#969696',
        size: 16,

        // Extra
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 50,
        paddingVertical: 0,
    }),

    sendButtonContainer: {
        alignItems: 'center',
        backgroundColor: '#1ECF00',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        justifyContent: 'center',
        width: 42,
        height:35,
        marginBottom:0,

    },
    attachButtonContainer: {
        borderWidth: 1,
        borderColor: '#E3E4E7',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        justifyContent: 'center',
        width: 42,
        height:35,
        marginBottom:0,
    },
    sendButtonText: FontUtils.build({
        align: FontUtils.aligns.center,
        color: 'white',
        size: 14,
    }),
});