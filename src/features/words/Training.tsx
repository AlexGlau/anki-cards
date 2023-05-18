import Button from '../../components/Button';

import './Training.scss';

function Test() {
  // Draft function
  const buttonHandler = (): void => {};

  return (
    <div className="test container">
      <div className="row">
        <div className="col">
          <div className="flash-card bg-light text-center">flash-card</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="options">
            <Button
              className="btn btn-light"
              onClick={buttonHandler}
            >
              Option 1
            </Button>
            <Button
              className="btn btn-light"
              onClick={buttonHandler}
            >
              Option 1
            </Button>
            <Button
              className="btn btn-light"
              onClick={buttonHandler}
            >
              Option 1
            </Button>
            <Button
              className="btn btn-light"
              onClick={buttonHandler}
            >
              Option 1
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
