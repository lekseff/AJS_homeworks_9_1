import GameSavingLoader from '../GameSavingLoader';

test('Test Promise', (done) => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  GameSavingLoader.load().then((saving) => {
    expect(JSON.parse(saving)).toEqual(expected);
    done();
  });
});
