// import styled from 'styled-components';
// const Example = () => {
//   return (
//     <div>
//       <p style={{ margin: '50px 100px' }}>부경대 게임동아리</p>
//       <div style={{ margin: '50px' }}>
//         <Label for="name">이름</Label>
//         <input
//           style={{
//             border: 'none',
//             marginLeft: '20px',
//             fontFamily: 'GamjaFlower',
//             fontSize: 40,
//           }}
//           id="name"
//         />
//       </div>
//       <div style={{ margin: '50px' }}>
//         <Label for="name">학번</Label>
//         <input
//           style={{
//             border: 'none',
//             marginLeft: '20px',
//             fontFamily: 'GamjaFlower',
//             fontSize: 40,
//           }}
//           id="name"
//         />
//       </div>
//       <div style={{ margin: '50px' }}>
//         <Label for="name">나이</Label>
//         <input
//           style={{
//             border: 'none',
//             marginLeft: '20px',
//             fontFamily: 'GamjaFlower',
//             fontSize: 40,
//           }}
//           id="name"
//         />
//       </div>
//       <div style={{ margin: '50px' }}>
//         <Label for="name">연락처</Label>
//         <input
//           style={{
//             border: 'none',
//             marginLeft: '20px',
//             fontFamily: 'GamjaFlower',
//             fontSize: 40,
//           }}
//           id="name"
//         />
//       </div>
//       <Div></Div>
//     </div>
//   );
// };
// export default Example;

// const Div = styled.div`
//   background-image: url('./1.png');
//   width: 270px;
//   height: 230px;
//   opacity: 0.5;
//   position: fixed;
//   top: 20%;
//   left: 20%;
// `;

// const Label = styled.label`
//   font-family: 'Gamja Flower', cursive;
//   font-size: 50px;
// `;

import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 300, maxWidth: 500 });
  return isMobile ? children : null;
};

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

const Example = () => {
  return (
    <div>
      <p style={{ margin: '50px 100px' }}>부경대 게임동아리</p>
      <Mobile>
        <div>asdfasdf</div>
      </Mobile>
      <Desktop>
        <div style={{ margin: '50px' }}>
          <Label for="name">이름</Label>
          <input
            style={{
              border: 'none',
              marginLeft: '20px',
              fontFamily: 'GamjaFlower',
              fontSize: 40,
            }}
            id="name"
          />
        </div>
        <div style={{ margin: '50px' }}>
          <Label for="name">학번</Label>
          <input
            style={{
              border: 'none',
              marginLeft: '20px',
              fontFamily: 'GamjaFlower',
              fontSize: 40,
            }}
            id="name"
          />
        </div>
        <div style={{ margin: '50px' }}>
          <Label for="name">나이</Label>
          <input
            style={{
              border: 'none',
              marginLeft: '20px',
              fontFamily: 'GamjaFlower',
              fontSize: 40,
            }}
            id="name"
          />
        </div>
        <div style={{ margin: '50px' }}>
          <Label for="name">연락처</Label>
          <input
            style={{
              border: 'none',
              marginLeft: '20px',
              fontFamily: 'GamjaFlower',
              fontSize: 40,
            }}
            id="name"
          />
        </div>
        <Div></Div>
      </Desktop>
    </div>
  );
};
export default Example;

const Div = styled.div`
  background-image: url('./1.png');
  width: 270px;
  height: 230px;
  opacity: 0.5;
  position: fixed;
  top: 20%;
  left: 20%;
`;

const Label = styled.label`
  font-family: 'Gamja Flower', cursive;
  font-size: 50px;
`;
