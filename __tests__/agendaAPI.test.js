let userResponse, userData, responseCode;

const userDataMock = {
  name: "Antía Sixirei",
  language: "Galician",
  id: "XOF91ZR7MHV1TXRS",
  bio: "Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. Morbi finibus dui sed est fringilla ornare. Duis pellentesque ultrices convallis. Morbi ultricies consequat ligula posuere eleifend.",
  version: 6.44
};

beforeEach(async () => {
  userResponse = await fetch('http://localhost:3000/user/XOF91ZR7MHV1TXRS');
  userData = await userResponse.json();
  responseCode = userResponse.status;
})

test('testing api to responde with user info', () => {
  expect(userData.response).toEqual(userDataMock);
  expect(responseCode).toBe(200);
});
