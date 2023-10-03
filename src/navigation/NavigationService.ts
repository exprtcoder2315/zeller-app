import {StackActions} from '@react-navigation/native';
let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params?: any) {
  _navigator.navigate(routeName, params);
}

function replace(routeName: string, params?: any) {
  _navigator.dispatch(StackActions.replace(routeName, params));
}

function goBack(target?: string) {
  _navigator.goBack(target ? target : undefined);
}

async function stackFirst(routeName: string, params: any = {}) {
  _navigator.reset({
    index: 0,
    routes: [
      {
        name: routeName,
        params: params,
      },
    ],
  });
}

async function reset(routeName: string) {
  _navigator.reset({
    index: 0,
    routes: [
      {
        name: routeName,
      },
    ],
  });
}

async function pop(index: number) {
  _navigator.dispatch(StackActions.pop(index));
}

async function popToTop() {
  _navigator.dispatch(StackActions.popToTop());
}

export default {
  setTopLevelNavigator,
  navigate,
  goBack,
  stackFirst,
  replace,
  reset,
  pop,
  popToTop,
};
