import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#6100FF'
  },
  pwa: {
    manifest: {
      name: "Audio Captcha",
      short_name: "Audio Captcha",
      description: "Generate Audio Captcha's in NodeJS With Ease.",
      "icons": [
        {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
    }
  }
})
