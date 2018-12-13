import React from 'react';
import PropTypes from 'prop-types';
class GifLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  render() {
      const {imageSrc, imageStyle, overlayBackground, loading} = this.props;
      const overlayBlockStyle = {
        zIndex: "99999",
        height: "100vh",
        width: "100%",
        textAlign: "center",
        position: "absolute",
        display: loading ? "block" : "none",
        backgroundColor: overlayBackground
    }
    return (
      <div style={overlayBlockStyle} >
          <img style={imageStyle} src={imageSrc} />
      </div>
    );
  }
}
GifLoader.propTypes = {
    imageSrc: PropTypes.string,
    overlayBackground: PropTypes.string,
    imageStyle: PropTypes.object,
    loading: PropTypes.bool.isRequired,
  };
GifLoader.defaultProps = {
    imageSrc: "https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif",
    imageStyle: {marginTop: "20%"},
    overlayBackground: "rgba(0,0,0,0.4)"
};
export default GifLoader;