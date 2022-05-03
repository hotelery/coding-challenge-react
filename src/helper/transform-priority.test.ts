
import transformPriority from './transform-priority';


describe('Test priority transformators', () => {
  it('should pass numbers properly', () => {
    expect(transformPriority(1))  .toEqual(1);
    expect(transformPriority(2)) .toEqual(2);
    expect(transformPriority(3)) .toEqual(3);
    expect(transformPriority(4)) .toEqual(4);
    expect(transformPriority(5)) .toEqual(5);
    expect(transformPriority('1' as any)) .toEqual(1);
    expect(transformPriority('2' as any)) .toEqual(2);
    expect(transformPriority('3' as any)) .toEqual(3);
    expect(transformPriority('4' as any)) .toEqual(4);
    expect(transformPriority('5' as any)) .toEqual(5);
  });

  it('should transform ENUMs properly', () => {
    expect(transformPriority('LOW')) .toEqual(2);
    expect(transformPriority('NORMAL')) .toEqual(3);
    expect(transformPriority('HIGH')) .toEqual(4);
  });

  it('should set defaults properly', () => {
    expect(transformPriority(0 as any)) .toEqual(3);
    expect(transformPriority(100 as any)) .toEqual(3);
    expect(transformPriority(undefined)) .toEqual(3);
    expect(transformPriority(null as any)) .toEqual(3);
    expect(transformPriority('' as any)) .toEqual(3);
    expect(transformPriority('sadfsadf' as any)) .toEqual(3);
  });
});
