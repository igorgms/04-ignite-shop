import { styled } from '@/styles';

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
});

const Home = () => {
  return <Button>Enviar</Button>;
};

export default Home;
