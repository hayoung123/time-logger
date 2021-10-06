function makeModuleNameMapper(srcPath, tsconfigPath) {
  //tsconfig에서 paths(절대경로) 가져오기
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  //aliases객체에 절대경로 jest format에 맞춰서 입력하기
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)');
    const path = paths[item][0].replace('/*', '/$1');
    aliases[key] = srcPath + '/' + path;
  });

  return aliases;
}

const TS_CONFIG_PATH = './tsconfig.json';
const SRC_PATH = '<rootDir>';

module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgrMock.ts',
    ...makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
  },

  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
};
