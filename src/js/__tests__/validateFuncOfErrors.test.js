import ErrorRepository from '../app';

test('Expecting result true', () => {

  const errorRepository = new ErrorRepository();
  const res1 = errorRepository.translate('01');  
  const res2 = errorRepository.translate('02'); 
  const res3 = errorRepository.translate('03'); 
  const res4 = errorRepository.translate('04'); 
  

    
  expect(res1).toBe('ReferenceError');
  expect(res2).toBe('SyntaxError');
  expect(res3).toBe('TypeError');
  expect(res4).toBe('Unknown error');
});
