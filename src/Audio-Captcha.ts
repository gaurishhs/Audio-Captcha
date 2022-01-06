/** @ts-ignore eslint-disable */

/**
 * @fileoverview Implementation of function New Captcha
 * @license Creative-Commons-v1.0
 * @copyright ApiDev234, All Rights Reserved.
 */
declare var require: any
import Generator from './Generator/Generator'
const client = require('soundoftext-js');
import axios from 'axios'

/**
 * 
 * Generate a Audio Captcha
 * @param length 
 * @returns {Promise<void>}
 */
export default async function newCaptcha(length?: number) {
    let generator = new Generator()
    let captcha = generator.generate(length || 6)
    return new Promise((resolve, reject) => {
        client.sounds.create({ text: captcha, voice: 'en-US' })
            .then((soundUrl: string) => {
                axios({
                    url: soundUrl,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                    resolve([response.data, captcha])
                });

            })
            .catch((e: string) => {
                reject(e)
            });
    })
}

export { default as Generator } from "./Generator/Generator"