import { DefaultImagePipe } from './default-image.pipe';

describe('DefaultPipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultImagePipe();
    expect(pipe).toBeTruthy();
  });
});
