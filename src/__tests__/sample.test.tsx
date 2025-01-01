import { describe, it, expect } from 'vitest';

describe('Sample Test Suite', () => {
  it('should pass a basic test', () => {
    expect(true).toBe(true);
  });

  // This test will verify jsdom environment once it's installed
  it('should have access to DOM APIs', () => {
    const element = document.createElement('div');
    element.innerHTML = 'Test';
    expect(element.textContent).toBe('Test');
  });
});
