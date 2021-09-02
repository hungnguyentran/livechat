import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div>
      <Row style={{justifyContent:'center', alignItems:'center', height: '100vh' }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center' }} level={1} >
            Live Chat
          </Title>
          <Button
            style={{ width: '100%', marginBottom: 10 }}
            shape="round"
            icon={<GoogleOutlined/>}
            onClick={() => handleLogin(googleProvider)}
          >
            Login with Google
          </Button>
          <Button
            style={{ width: '100%' }}
            shape="round"
            icon={<FacebookOutlined/>}
            onClick={() => handleLogin(fbProvider)}
          >
            Login with Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
