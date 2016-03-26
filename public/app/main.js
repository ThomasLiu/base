'use strict'

import $ from 'jquery';

import {imageUploadeInit} from './uploade/ImageUploader';

import {ueditorInit} from './ueditor/UeditorInit';

$(function(){

    $('[data-ueditor]').each( () => {
        ueditorInit($(this).attr('id'));
    });


    $('[data-uploader-pricture]').each( () => {
        imageUploadeInit($(this));
    });
});

console.log('1');