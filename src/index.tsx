import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '~/components/GlobalStyle';
import Home from '~/pages/Home';

export default function VirtualBanking() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/signin' element={<SigninPage />} /> */}
      </Routes>
    </>
  );
}
