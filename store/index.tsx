import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

// const musicInitialState = {
//   musics: [
//     {
//       _id: "5ce8cdabf7bbb2251f9f6cf2",
//       type: "qq",
//       link: "http://y.qq.com/n/yqq/song/003OUlho2HcRHC.html",
//       songId: "003OUlho2HcRHC",
//       title: "告白气球",
//       author: "周杰伦",
//       lrc: `[ti:告白气球]
//   [ar:周杰伦]
//   [al:周杰伦的床边故事]
//   [by:]
//   [offset:0]
//   [00:00.00]告白气球 - 周杰伦 (Jay Chou)
//   [00:07.86]词：方文山
//   [00:15.72]曲：周杰伦
//   [00:23.59]塞纳河畔 左岸的咖啡
//   [00:26.16]我手一杯 品尝你的美
//   [00:28.78]
//   [00:29.33]留下唇印的嘴
//   [00:31.83]
//   [00:34.27]花店玫瑰 名字写错谁
//   [00:36.90]告白气球 风吹到对街
//   [00:39.29]
//   [00:40.01]微笑在天上飞
//   [00:42.10]
//   [00:44.01]你说你有点难追
//   [00:46.57]想让我知难而退
//   [00:49.22]礼物不需挑最贵
//   [00:51.89]只要香榭的落叶
//   [00:54.56]喔 营造浪漫的约会
//   [00:57.26]不害怕搞砸一切
//   [00:59.93]拥有你就拥有全世界
//   [01:04.10]
//   [01:05.01]亲爱的 爱上你
//   [01:08.17]从那天起
//   [01:10.61]
//   [01:11.33]甜蜜的很轻易
//   [01:14.43]
//   [01:15.69]亲爱的 别任性
//   [01:18.85]你的眼睛
//   [01:21.24]
//   [01:21.94]在说我愿意
//   [01:25.23]
//   [01:48.90]塞纳河畔 左岸的咖啡
//   [01:51.46]我手一杯 品尝你的美
//   [01:54.43]留下唇印的嘴
//   [01:56.63]
//   [01:59.56]花店玫瑰 名字写错谁
//   [02:02.14]告白气球 风吹到对街
//   [02:04.37]
//   [02:05.23]微笑在天上飞
//   [02:07.49]
//   [02:09.29]你说你有点难追
//   [02:11.90]想让我知难而退
//   [02:14.60]礼物不需挑最贵
//   [02:17.26]只要香榭的落叶
//   [02:19.93]喔 营造浪漫的约会
//   [02:22.65]不害怕搞砸一切
//   [02:25.27]拥有你就拥有 全世界
//   [02:29.23]
//   [02:30.31]亲爱的 爱上你
//   [02:33.58]从那天起
//   [02:36.03]
//   [02:36.60]甜蜜的很轻易
//   [02:39.65]
//   [02:40.94]亲爱的 别任性
//   [02:44.20]你的眼睛
//   [02:46.70]
//   [02:47.26]在说我愿意
//   [02:50.81]
//   [02:51.76]亲爱的 爱上你
//   [02:54.52]
//   [02:55.05]恋爱日记
//   [02:57.30]
//   [02:57.93]飘香水的回忆
//   [03:00.72]
//   [03:02.33]一整瓶 的梦境
//   [03:05.42]全都有你
//   [03:07.91]
//   [03:08.64]搅拌在一起
//   [03:11.39]
//   [03:13.02]亲爱的别任性
//   [03:16.23]你的眼睛
//   [03:19.99]
//   [03:21.31]在说我愿意`,
//       url:
//         "http://dl.stream.qqmusic.qq.com/M500003OUlho2HcRHC.mp3?vkey=A08E15AF32E6975ED1E911E8FC2FA3E9EE20275421362BE57E0D4AB1CC8D8D59ECB7501BC50131D31B1FFAA80EC1FDDA80C6B9EE5AE51DE1&guid=5150825362&fromtag=1",
//       pic:
//         "http://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg",
//       registerTime: "1558760875054"
//     }
//   ]
// };

export const actionTypes = {
  TICK: "TICK",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET"
};

interface exampleActionProps {
  type: string,
  payload: object,
  ts: string,
  light: string,
}
// REDUCERS
export const exampleReducer = (state = exampleInitialState, action: exampleActionProps) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      });
    default:
      return state;
  }
};

interface musicActionProps {
  type: string,
  payload: object[]
}

interface StateProps {
  musics: object[],
}

export const musicReducer = (state: StateProps, action: musicActionProps) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        musics: [
          ...(state.musics || []),
          ...action.payload,
        ]
      };
      break;
    default:
      return state;
  }
}

// music action
export const addMusic = (payload: object) => {
  return { type: 'ADD', payload };
};

const reducer = combineReducers({
  exampleReducer,
  musicReducer
});

// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() };
};
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() };
};

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};

export function initializeStore(initialState: object) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
