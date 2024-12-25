import Dropdown from '../../node_modules/react-bootstrap/Dropdown';
import styled from 'styled-components';
import { useStyleContext } from '../Context/StyleContext';

const StyledContainer = styled.div`
  position: absolute;
  top: 3%;
  right: -2%;
  width: 200px;
  height: 50px;
  display: flex;
`;

export default function Option() {
  const { font, setFont, background, setBackground } = useStyleContext();

  function handleChangeFont(e) {
    const fontValue = e.target.dataset.value;
    setFont(fontValue);
  }

  function handleChangeBackground(e) {
    const bgValue = e.target.dataset.value;
    setBackground(bgValue);
  }

  return (
    <StyledContainer>
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          className="me-3"
          id="dropdown-basic"
        >
          字體
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={handleChangeFont}
            className={font === 'sans-serif' && 'active'}
            data-value="sans-serif"
          >
            預設字體
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleChangeFont}
            className={font === 'Oswald' && 'active'}
            data-value="Oswald"
          >
            Oswald
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleChangeFont}
            className={font === 'Roboto' && 'active'}
            data-value="Roboto"
          >
            Roboto
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleChangeFont}
            className={font === 'LXGW WenKai TC' && 'active'}
            data-value="LXGW WenKai TC"
          >
            LXGW WenKai TC
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          背景
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={handleChangeBackground}
            className={background === '#fff' && 'active'}
            data-value="#fff"
          >
            預設背景
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleChangeBackground}
            className={background === '#e2e2e2' && 'active'}
            data-value="#e2e2e2"
          >
            Light
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleChangeBackground}
            className={background === '#787474' && 'active'}
            data-value="#787474"
          >
            Dark
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleChangeBackground}
            className={background === '#29b3d0' && 'active'}
            data-value="#29b3d0"
          >
            Blue
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </StyledContainer>
  );
}
