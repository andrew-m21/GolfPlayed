/** these all set up for navigation done by Ramesh **/
import RouterScene from '../Constant/constant'

import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import styles from './styles';
import {
    animationStyle,
    platformBasedPanHandlers,
    renderTitle,
} from '../Reusables/Router';
import withConnect, {  ReduxRouter } from './withConnect';

const {

    MAIN_CONTENT,
    AUTHENTICATION,
    LOG_IN,
    ROOT_SCENE,
    SIGN_UP,
    FORGET_PASSWORD,
    INTRO_SLIDES,
    WRAPPER_KEY_SUFFIX,
    NAVIGATOR_KEY_SUFFIX,
    TABS_KEY_SUFFIX,
    CONTENT_KEY_SUFFIX,
    REGISTRATION_ONE,
    REGISTRATION_TWO,
    REGISTRATION_THREE,
    REGISTRATION_FOUR,

    DASH_BOARD,
    CHAT_SCREEN,
    EXPLORE_SCREEN,
    OPEN_SCREEN,
    PROFILE_SCREEN,
    COMPLETE_PROFILE,
    NEW_CHAT_SCREEN,
    NEW_CHAT_GROUP_SCREEN,
    RESET_PASSWORD,
    RESET_SUCCESS,
    CHAT,
    FEEDBACK,
    HANDICAP,
    MAPCOMPONENT,
    COURSE_REVIEW,
    BUDDIES_SCREEN,
    WALLET,
    FILTER,
    SEARCH,
    
    //BY HARSHIT
    MEMBERS_AREA,
    PRIVACY_AND_PERMISSION,
    HANDICAP_AND_STATISTICS,
    GOLF_BAG,
    PIN_ASSINGMENTS,
    HOME_COURSE_AND_SOCETIES,
    COMMUNICATION,
    MEMBERS_AREA_NEWS_FEEDS,
    MEMBERS_SECTION_PAGE1,
    MEMBERS_SECTION_PAGE2,
    TAG_YOUR_BUDDIES,
    CREATE_NEWS_FEED_POST,
    MEMBERS_AREA_EVENTS,
    MEMBERS_AREA_CREATE_EVENTS,
    ACCOUNT_DETAIL,
    SETTINGS,
    MEMBERS_AREA_REQUEST_GAME,
    MEMBERS_AREA_GAME_REQUESTED,
    MEMBERS_AREA_GAME_OFFERED,
    MEMBERS_AREA_OFFER_GAME,
    MEMBERS_AREA_MARKET_PLACE,
    MEMBERS_AREA_MARKET_PLACE_DRIVER,
    MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL,
    MEMBERS_AREA_INVITE_GUESTS,
    MEMBERS_AREA_EVENTS_CREATED,
    MEMBERS_AREA_INBOX,
    MEMBERS_AREA_CHAT,
    MEMBERS_AREA_TEA_TIME,
    MEMBERS_AREA_DINNER,
    CALCULATOR,
    COLORPICKERPAGE,
    ADDYOUROWNPIN,
    HIGHLIGHTEDACHIVED,
    ADD_ROUND_COURSE_REVIEW,
    VIDEOS,
    VIDEOUPLOAD,
    PHOTOS,
    SHOWVIDEOS,
    VOICENOTES,
    SCORECARDEDIT,

    //Communities
    CREATE_A_COMMUNITIES,
    EXPLORER_COMMUNITY_PRIVACY,
    EXPLORER_COMMUNITY_FIRST_PAGE,
    EXPLORER_COMMUNITY_NEWS_FEEDS,
    EXPLORER_CREATE_NEWS_FEED_POST,
    EXPLORER_TAG_YOUR_BUDDIES


} = RouterScene;

import React from "react"
import LoginScene from '../Components/Authentication/logInView/LoginScene'
import LoginScreen from '../pages/login/LoginScreen';
import SignupScreen from '../pages/signup/SignupScreen';
import ForgotScreen from '../pages/forgot/ForgotScreen';
import ResetSuccess from  '../pages/forgot/ResetSuccess'
import TutorialScreen from '../TutorialScreen';
import RegistrationPageOne from '../pages/signup/RegistrationPageOne'
import RegistrationPageTwo from '../pages/signup/RegistrationPageTwo'
import RegistrationPageThree from '../pages/signup/RegistrationPageThree'
import RegistrationPageFour from '../pages/signup/RegistrationPageFour'
import TabIcon from '../pages/Component/TabIcons/TabIcon'
import Handicap from '../pages/signup/Handicap';
import DashBoardScreen from '../pages/dashboard/DashboardScreen'
import ChatScreen from '../pages/chatroom/ChatScreen'
import ExploreScreen from '../pages/explore/ExploreScreen'
import PlusScreen from '../pages/Plus/PlusScreen'

import CourseReview from "../pages/Profile/CourseReview";
import BuddiesScreen from "../pages/Profile/BuddiesScreen";
import Wallet from "../pages/Profile/Wallet";
import Filter from "../pages/Profile/Filter/Filter";
import ProfileScreen from "../pages/Profile/ProfileScreen"
import ProfileSetting from "../pages/Profile/ProfileSetting"
import CompleteYourProfile from '../pages/signup/CompleteYourProfile'
import BottomToolbar from '../pages/Component/Toolbars/BottomToolbar'
import NewChatScreen from "../pages/chatroom/NewChatScreen"
import NewGroupScreen from "../pages/chatroom/NewGroupScreen"
import ResetPassword from '../pages/forgot/ResetPassword'
import LeftDrawer from '../Components/dashboard/Drawer/LeftDrawer'
import Chat from "../pages/chatroom/Chat";
import Feedback from "../pages/feedback/Feedback";

import MembersArea from "../pages/Profile/MembersArea";
import Accountdetail from "../pages/Profile/Accountdetail";
import PrivacyAndPermission from "../pages/Profile/PrivacyAndPermission";
import HandicapAndstatistics from "../pages/Profile/HandicapAndstatistics";
import GolfBag from "../pages/Profile/GolfBag";
import Pinassingments from "../pages/Profile/Pinassingments";
import HomecourseAndsoceties from "../pages/Profile/HomecourseAndsoceties";
import Communication from "../pages/Profile/Communication";
import MembersSectionPage2 from "../pages/Profile/MembersSectionPage2";
import MembersAreaNewsfeed from "../pages/Profile/MembersAreaNewsfeed";
import MembersSectionPage1 from "../pages/Profile/MembersSectionPage1";
import TagYourBuddies from "../pages/Profile/TagYourBuddies";
import CreateNewsFeedpost from "../pages/Profile/CreateNewsFeedpost";
import MembersAreaEvents from "../pages/Profile/MembersAreaEvents";
import MemberAreaCreateEvent from "../pages/Profile/MemberAreaCreateEvent";
import MemberAreaRequestGame from "../pages/Profile/MemberAreaRequestGame";
import MemberAreaOfferGame from "../pages/Profile/MemberAreaOfferGame";
import MemberAreaGameOffered from "../pages/Profile/MemberAreaGameOffered";
import MembersAreaGameRequested from "../pages/Profile/MembersAreaGameRequested";
import MembersAreaMarketPlace from "../pages/Profile/MembersAreaMarketPlace";
import MembersAreaMarketPlaceDriver from "../pages/Profile/MembersAreaMarketPlaceDriver";
import MembersAreaMarketPlaceDriverSell from "../pages/Profile/MembersAreaMarketPlaceDriverSell";
import MembersAreaEventscreated from "../pages/Profile/MembersAreaEventscreated";
import MembersAreaInviteGuests from "../pages/Profile/MembersAreaInviteGuests";
import MembersAreaInbox from "../pages/Profile/MembersAreaInbox";
import MemberAreaChat from "../pages/Profile/MemberAreaChat";
import MemberAreaTeaTime from "../pages/Profile/MemberAreaTeaTime";
import MemberAreaDinner from "../pages/Profile/MemberAreaDinner";
import Calculator from "../pages/Profile/Calculator";
import ColorPickerPage from "../pages/Plus/ColorPickerPage";
import AddYourOwnPin from "../pages/Plus/AddYourOwnPin";
import HighlightAchieved from "../pages/Plus/HighlightAchieved";
import AddARoundCourseReview from "../pages/Plus/AddARoundCourseReview";

//Communities
import CreateACommunities from "../pages/explore/Communities/CreateACommunities";
import CommunityPrivacy from "../pages/explore/Communities/CommunityPrivacy";
import ExplorerCommunityFirstPage from "../pages/explore/Communities/ExplorerCommunityFirstPage";

import ExplorerCommunityNewsfeed from "../pages/explore/Communities/ExplorerCommunityNewsfeed";
import ExplorerTagYourBuddies from "../pages/explore/Communities/ExplorerTagYourBuddies";
import ExplorerCreateNewsFeedpost from "../pages/explore/Communities/ExplorerCreateNewsFeedpost";

import Videos from "../pages/Plus/Videos";
import VideoUpload from "../pages/Plus/VideoUpload";
import Photos from "../pages/Plus/Photos";
import ShowVideos from "../pages/Plus/ShowVideos";
import VoiceNotes from "../pages/Plus/VoiceNotes";
import ScoreCardEdit from "../pages/Plus/ScoreCardEdit";

import SearchScreen from "../pages/Search/SearchScreen";


//This scene Added by Ramesh for map
import GolfPlayedMap from '../pages/maps/GolfPlayedMap'

const sceneSelector = props => {

    return TutorialScreen
};

const backButtonImage = "";

class AppRouter extends React.PureComponent{

    constructor(props){
        super(props)
    }

    get navigatorProps() {
        return {
            //backButtonImage,
            //drawerImage,
            //renderTitle,
            leftButtonStyle: styles.navButton,
            leftButtonIconStyle: styles.backButtonImage,
            rightButtonIconStyle: styles.backButtonImage,
            navigationBarStyle: styles.navBar,
            sceneStyle: styles.navScenes,
            titleStyle: styles.navTitle,

        };
    }

    componentDidMount() {
        Actions.refresh({key: 'drawer', ref: this.refs.navigation})
    }

    get authNavigatorProps() {
        return {
            ...this.navigatorProps,
            drawerImage: null,
            barButtonIconStyle: styles.backButtonImage,
            navigationBarStyle: [styles.navBar, styles.authNavBar],
        };
    }
    get routerProps() {
        return {
            animationStyle,
            onAuthorize: this.onAuthorize,
            passProps: true,
        };
    }

    render(){
        const sideMenuProps = { component: DashBoardScreen, sideMenuOpen: false };
        const mainContentProps = {

            hideTabBar: true,
            tabs: true,
            sceneStyle: styles.tabScenes,
        };
        return( <ReduxRouter {...this.routerProps}>
            <Scene unmountScenes key={ROOT_SCENE} component={Modal} selector={sceneSelector}>
                <Scene key={AUTHENTICATION} {...this.authNavigatorProps}>
                    <Scene component={TutorialScreen} hideNavBar key={INTRO_SLIDES} />
                    <Scene component={SignupScreen}  hideNavBar key={SIGN_UP} />
                    <Scene component={LoginScreen}  hideNavBar key={LOG_IN} />
                    <Scene component={ForgotScreen} hideNavBar key={FORGET_PASSWORD} />
                    <Scene component={ResetPassword} hideNavBar key={RESET_PASSWORD} />
                    <Scene component={ResetSuccess} hideNavBar key={RESET_SUCCESS} />
                    <Scene component={RegistrationPageOne} hideNavBar key={REGISTRATION_ONE} />
                    <Scene component={RegistrationPageTwo} hideNavBar key={REGISTRATION_TWO} />
                    <Scene component={RegistrationPageThree} hideNavBar key={REGISTRATION_THREE} />
                    <Scene component={CompleteYourProfile} hideNavBar key={COMPLETE_PROFILE} />
                    <Scene component={RegistrationPageFour} hideNavBar key={REGISTRATION_FOUR} />
                    <Scene component={Handicap} hideNavBar key={HANDICAP}/>
                    <Scene component={Feedback} hideNavBar key={FEEDBACK}/>

                </Scene>

                <Scene  hideNavBar drawer drawerPosition={'left'} contentComponent={LeftDrawer}>
                    <Scene key={MAIN_CONTENT} hideNavBar tabs tabBarStyle={{backgroundColor: 'black'}} tabBarPosition={'bottom'} tabBarComponent={BottomToolbar}>
                        <Scene key={DASH_BOARD} hideNavBar component={DashBoardScreen} />
                        <Scene key={CHAT_SCREEN} hideNavBar component={ChatScreen} />
                        <Scene key={OPEN_SCREEN} hideNavBar component={PlusScreen} />
                        <Scene key={PROFILE_SCREEN} hideNavBar component={ProfileScreen} />
                        <Scene key={SETTINGS} hideNavBar component={ProfileSetting} />
                        <Scene key={MEMBERS_AREA} hideNavBar component={MembersArea} />
                        <Scene key={ACCOUNT_DETAIL} hideNavBar component={Accountdetail} />
                        <Scene key={PRIVACY_AND_PERMISSION} hideNavBar component={PrivacyAndPermission} />
                        <Scene key={HANDICAP_AND_STATISTICS} hideNavBar component={HandicapAndstatistics} />
                        <Scene key={GOLF_BAG} hideNavBar component={GolfBag} />
                        <Scene key={PIN_ASSINGMENTS} hideNavBar component={Pinassingments} />
                        <Scene key={HOME_COURSE_AND_SOCETIES} hideNavBar component={HomecourseAndsoceties} />
                        <Scene key={COMMUNICATION} hideNavBar component={Communication} />
                        <Scene key={MEMBERS_SECTION_PAGE1} hideNavBar component={MembersSectionPage1} />
                        <Scene key={MEMBERS_SECTION_PAGE2} hideNavBar component={MembersSectionPage2} />
                        <Scene key={MEMBERS_AREA_NEWS_FEEDS} hideNavBar component={MembersAreaNewsfeed} />
                        <Scene key={TAG_YOUR_BUDDIES} hideNavBar component={TagYourBuddies} />
                        <Scene key={CREATE_NEWS_FEED_POST} hideNavBar component={CreateNewsFeedpost} />
                        <Scene key={MEMBERS_AREA_EVENTS} hideNavBar component={MembersAreaEvents} />
                        <Scene key={MEMBERS_AREA_CREATE_EVENTS} hideNavBar component={MemberAreaCreateEvent} />
                        <Scene key={MEMBERS_AREA_REQUEST_GAME} hideNavBar component={MemberAreaRequestGame} />
                        <Scene key={MEMBERS_AREA_OFFER_GAME} hideNavBar component={MemberAreaOfferGame} />
                        <Scene key={MEMBERS_AREA_GAME_OFFERED} hideNavBar component={MemberAreaGameOffered} />
                        <Scene key={MEMBERS_AREA_GAME_REQUESTED} hideNavBar component={MembersAreaGameRequested} />
                        <Scene key={MEMBERS_AREA_MARKET_PLACE} hideNavBar component={MembersAreaMarketPlace} />
                        <Scene key={MEMBERS_AREA_MARKET_PLACE_DRIVER} hideNavBar component={MembersAreaMarketPlaceDriver} />
                        <Scene key={MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL} hideNavBar component={MembersAreaMarketPlaceDriverSell} />
                        <Scene key={MEMBERS_AREA_EVENTS_CREATED} hideNavBar component={MembersAreaEventscreated} />
                        <Scene key={MEMBERS_AREA_INVITE_GUESTS} hideNavBar component={MembersAreaInviteGuests} />
                        <Scene key={MEMBERS_AREA_INBOX} hideNavBar component={MembersAreaInbox} />
                        <Scene key={MEMBERS_AREA_CHAT} hideNavBar component={MemberAreaChat} />
                        <Scene key={MEMBERS_AREA_TEA_TIME} hideNavBar component={MemberAreaTeaTime} />
                        <Scene key={MEMBERS_AREA_DINNER} hideNavBar component={MemberAreaDinner} />
                        <Scene key={CALCULATOR} hideNavBar component={Calculator} />
                        <Scene key={ADDYOUROWNPIN} hideNavBar component={AddYourOwnPin} />
                        <Scene key={COLORPICKERPAGE} hideNavBar component={ColorPickerPage} />
                        <Scene key={HIGHLIGHTEDACHIVED} hideNavBar component={HighlightAchieved} />
                        <Scene key={ADD_ROUND_COURSE_REVIEW} hideNavBar component={AddARoundCourseReview} />
                        
                        <Scene key={VIDEOS} hideNavBar component={Videos} />
                        <Scene key={VIDEOUPLOAD} hideNavBar component={VideoUpload} />
                        <Scene key={PHOTOS} hideNavBar component={Photos} />
                        <Scene key={SHOWVIDEOS} hideNavBar component={ShowVideos} />
                        <Scene key={VOICENOTES} hideNavBar component={VoiceNotes} />
                        <Scene key={SCORECARDEDIT} hideNavBar component={ScoreCardEdit} />
                       
                    </Scene>
                </Scene>
                <Scene key={EXPLORE_SCREEN} hideNavBar component={ExploreScreen} />
                <Scene key={CREATE_A_COMMUNITIES} hideNavBar component={CreateACommunities} />
                <Scene key={EXPLORER_COMMUNITY_PRIVACY} hideNavBar component={CommunityPrivacy} />
                <Scene key={EXPLORER_COMMUNITY_FIRST_PAGE} hideNavBar component={ExplorerCommunityFirstPage} />
                
                <Scene key={EXPLORER_COMMUNITY_NEWS_FEEDS} hideNavBar component={ExplorerCommunityNewsfeed} />
                <Scene key={EXPLORER_CREATE_NEWS_FEED_POST} hideNavBar component={ExplorerCreateNewsFeedpost} />
                <Scene key={EXPLORER_TAG_YOUR_BUDDIES} hideNavBar component={ExplorerTagYourBuddies} />
                <Scene key={SEARCH} hideNavBar component={SearchScreen} />
                <Scene key={COURSE_REVIEW} hideNavBar component={CourseReview} />
                <Scene key={BUDDIES_SCREEN} hideNavBar component={BuddiesScreen} />
                <Scene key={WALLET} hideNavBar component={Wallet} />
                <Scene key={FILTER} hideNavBar component={Filter} />
                <Scene key={NEW_CHAT_SCREEN} hideNavBar component={NewChatScreen} />
                <Scene key={NEW_CHAT_GROUP_SCREEN} hideNavBar component={NewGroupScreen} />
                <Scene component={Chat} hideNavBar key={CHAT}/>
                <Scene component = {GolfPlayedMap}  hideNavBar key = {MAPCOMPONENT}/>
            </Scene>
        </ReduxRouter>)
    }
}
export default withConnect(AppRouter);
