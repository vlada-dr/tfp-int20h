import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import styled from 'styled-components';
import { MaleAvatar } from '../../../ui/icons';
import { color } from '../../../ui/theme';

const CLOUDINARY_UPLOAD_PRESET = 'wgncshp5';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mouire/upload';

export class PhotoUpload extends Component {
    state = {
      disableDrop: false,
      imageUrl: this.props.src,
    }

    onImageDrop = (files) => {
      this.setState({
        imageUrl: files[0].preview,
        disableDrop: true,
      });
      this.onSave(files[0])
    }

    onSave = (file) => request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file)
      .then((response) => {
        response.body.secure_url !== '' && this.setState({
          imageUrl: response.body.secure_url,
        });
        this.props.onChange(response.body.secure_url)
      })

    render() {
      const { disableDrop, imageUrl } = this.state;

      if (imageUrl) {
        return (
          <StyledWrapper>
            <img src={imageUrl} />
          </StyledWrapper>
        )
      }

      return (
        <StyledWrapper>
          <Dropzone
            onDrop={this.onImageDrop}
            multiple={false}
            accept="image/*"
            disableClick={disableDrop}
          />
          <MaleAvatar/>
        </StyledWrapper>
      )
    }
};

const StyledWrapper = styled.div`
  position: relative;
  width: 150px !important;
  height: 150px !important;
  
  & > div {
    width: 150px !important;
    height: 150px !important;
    border-radius: 50% !important;
    background: ${color.i0};
    border-style: none !important;
    cursor: pointer;
  }
  
  svg {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 35px;
    left: 35px;
    fill: white;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }
`;
