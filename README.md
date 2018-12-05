# React Gif Loader
## Install
```
npm install react-gif-loader --save

```

## Demo
<img src="https://github.com/Thamodaran/react-gif-loader/raw/master/demo.gif" alt="demo" width="100%" />

## Usage
```
React gif loader example with customize your own styles
```
```js
import GifLoader from 'react-gif-loader';

class ReactGifLoader extends Component {
    render() {
        return (
            <GifLoader
                loading={true}
                imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
                imageStyle={imageStyle}
                overlayBackground="rgba(0,0,0,0.5)"
            />
        );
    }
}
```

## PROPTYPES
| Prop | Type | Default | Required |
| ---- | ---- | ------- | ---------|
| imageSrc | String | https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif | No |
| overlayBackground | String | rgba(0,0,0,0.4) | No |
| imageStyle | Object | {marginTop: "20%"} | No |
| loading | Boolean | - | Yes |
# react-gif-loader
