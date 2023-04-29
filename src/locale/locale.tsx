export const locales = [
  { value: 'ja-JP', label: '日本語' },
  { value: 'en-US', label: 'English' },
  { value: 'cmn-CN', label: '中文' },
  { value: 'ko-KR', label: '한국어' },
];

export const titleMap: Map<string, string> = new Map([
  [ 'ja-JP', '無限読み聞かせ'],
  [ 'en-US', 'Infinite Read Aloud'],
  [ 'cmn-CN', '读不完的书'],
  [ 'ko-KR', '무한 책 읽어주기'],
]);

export const loadingMap: Map<string, string> = new Map([
  [ 'ja-JP', 'AIがお話を考えています...'],
  [ 'en-US', 'AI is thinking about a story...'],
  [ 'cmn-CN', 'AI正在思考一个故事...'],
  [ 'ko-KR', 'AI가 이야기를 생각하고 있습니다...'],
]);

export const noteMap: Map<string, Array<string>> = new Map([
  [ 'ja-JP', ['注意：このサイトは音が出ます', 
              'お子様を寝かしつけるお供に', 
              '大人でもつまらない話で眠くなるかも？'] ],
  [ 'en-US', ['Caution: This site has sound.', 
              'For putting children to bed.', 
              'Even adults might fall asleep with boring stories?'] ],
  [ 'cmn-CN', ['注意：这个网站有声音', 
              '用于陪伴儿童入睡', 
              '即使是成年人也可能因为无聊的故事而睡着？'] ],          
  [ 'ko-KR', ['주의: 이 사이트에서는 소리가 납니다.', 
              '아이를 재우는 데 도움이 된다.', 
              '어른도 지루한 이야기에 졸음이 쏟아질 수 있다?'] ],          
]);

export const promptMap: Map<string, string> = new Map([
  [ 'ja-JP', '回答は日本語で返してください。'],
  [ 'en-US', '回答は英語で返してください。'],
  [ 'cmn-CN', '回答は標準中国語で返してください。'],
  [ 'ko-KR', '回答は韓国語で返してください。'],
]);

export const pollyVoiceMap: Map<string, string> = new Map([
  [ 'ja-JP', 'Mizuki'],
  [ 'en-US', 'Salli'],
  [ 'cmn-CN', 'Zhiyu'],
  [ 'ko-KR', 'Seoyeon'],
]);
