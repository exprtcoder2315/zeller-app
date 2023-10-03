import React from 'react';
import {View, ViewStyle, StyleSheet, StatusBar, ScrollView} from 'react-native';
import BaseHeader from './BaseHeader';
import color from '@app/resources/color';

const BaseLayout: React.FC<PropsI> = props => {
  const {
    disableScrollView = false,
    enableHeader = false,
    bounces = true,
    showsVerticalScrollIndicator = false,
  } = props;

  const BodyView: React.FC<any> = p => {
    return disableScrollView ? (
      <View style={styles.container} {...p}>
        {p.children}
      </View>
    ) : (
      <ScrollView
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        contentInsetAdjustmentBehavior="automatic"
        bounces={bounces}>
        <View style={styles.scrollChildBody}>{p.children}</View>
      </ScrollView>
    );
  };

  return (
    <View style={[styles.baseBody, {...props.rootStyles}]}>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        showHideTransition={'none'}
        hidden={false}
      />
      {enableHeader ? <BaseHeader {...props} /> : null}
      {BodyView(props)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  baseBody: {
    flex: 1,
    backgroundColor: color.white,
  },
  scrollChildBody: {
    flex: 1,
  },
});

export interface PropsI {
  navigation?: any;
  title?: string;
  heading?: string;
  metaType?: string;
  imgBackground?: any;
  variant?: 'base' | 'home' | 'webview';
  disableBack?: boolean;
  disableMenu?: boolean;
  showsVerticalScrollIndicator?: boolean;
  disableSearch?: boolean;
  disableCart?: boolean;
  colorStatusBar?: string;
  hideEnableLocation?: boolean;
  disableScrollView?: boolean;
  enableHeader?: boolean;
  enableStatusBar?: boolean;
  enableMySpend?: boolean;
  isLogoutOptionShow?: boolean;
  enableRefreshControl?: boolean;
  enableInfoHeader?: boolean;
  enableBannerHeader?: boolean;
  bounces?: boolean;
  rootStyles?: ViewStyle;
  bodyStyles?: ViewStyle;
  children: JSX.Element;
  onBackPress?: () => void;
  isShowLogo?: boolean;
  isShowBellIcon?: boolean;
  isShowLocation?: boolean;
}

export default BaseLayout;
