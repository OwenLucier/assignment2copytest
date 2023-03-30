import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import Index from '../pages/index.page.mdx';
import { load } from 'cheerio';

describe('index test', function () {
  it('tests for h1 of coming soon', function () {
    const sHtml = renderToString(React.createElement(Index));
    const $ = load(sHtml);
    expect($('h1').html()).toBe('Coming Soon');
  });
  it('tests for building', function () { //Render index page as a string then check if the word drone is in the string
    const sHtml = renderToString(React.createElement(Index)); //makes a string from index.page.mdx
    expect(sHtml).toContain('drone'); //render html and expect that it contains the word "drone"
  });
  it('tests for copyright', function () { //Render index page as a string then check if the word drone is in the string
    const sHtml = renderToString(React.createElement(Index)); //makes a string from index.page.mdx
    const $ = load(sHtml);
    expect(sHtml).toContain('Owen was here 2023'); //render html and expect that it contains the word "copyright"
  });
});
