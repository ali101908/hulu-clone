import { Col, Row } from 'antd';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs() {
  return (
	<Row justify='center'>
	<Col xs={21} sm={22} md={15}>
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
	</Col>
	</Row>
  );
}

export default Breadcrumbs;