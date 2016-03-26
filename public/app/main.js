'use strict'

import $ from 'jquery';

import {imageUploadeInit} from './uploade/ImageUploader';

import {ueditorInit} from './ueditor/UeditorInit';

$(function(){

    $('[data-ueditor]').each( (index,t) => {
        ueditorInit($(t).attr('id'));
    });


    $('[data-uploader-pricture]').each( (index,t) => {
        imageUploadeInit($(t));
    });
});

console.log('1');