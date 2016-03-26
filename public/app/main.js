'use strict'

import $ from 'jquery';

import {imageUploadeInit} from './uploade/ImageUploader';

$('[data-uploader-pricture]').each(function(){
    imageUploadeInit($(this));
});

console.log('1');