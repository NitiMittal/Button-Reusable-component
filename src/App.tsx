import { AppContainer } from "./AppContainer";
import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <AppContainer>
      <h1>Buttons</h1>
      <div className="flex-container">
        <div className="flex-item">
          <p className="title">&lt;Button /&gt;</p>

          <Button text="Default" />
        </div>

        <div className="flex-item">
          <p className="title">&:hover, &:focus</p>
          <Button text="Default" hover hoverColor="#aeaeae" />
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <p className="title">&lt;Button variant="outline" /&gt;</p>
          <Button text="Default" variant="outline" />
        </div>

        <div className="flex-item">
          <p className="title">&:hover, &:focus</p>
          <Button
            text="Default"
            variant="outline"
            hover
            hoverColor="rgba(41, 98, 255, 0.1)"
          />
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <p className="title">&lt;Button variant="text" /&gt;</p>
          <Button text="Default" variant="text" />
        </div>

        <div className="flex-item">
          <p className="title">&:hover, &:focus</p>
          <Button
            text="Default"
            variant="text"
            hover
            hoverColor="rgba(41, 98, 255, 0.1)"
          />
        </div>
      </div>

      <div className="flex-item">
        <p className="title">&lt;Button disableShadow /&gt;</p>
        <Button text="Default" disabledBoxShadow />
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <p className="title">&lt;Button disabled /&gt;</p>
          <Button text="Default" disabledButton />
        </div>

        <div className="flex-item">
          <p className="title">&lt;Button variant="text" disabled /&gt;</p>
          <Button text="Default" variant="text" disabledButton />
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <p className="title">
            &lt;Button startIcon="local grocery store" /&gt;
          </p>
          <Button text="Default" iconAlignment="left" buttonColor="primary" />
        </div>

        <div className="flex-item">
          <p className="title">
            &lt;Button endIcon="local grocery store" /&gt;
          </p>
          <Button text="Default" iconAlignment="right" buttonColor="primary" />
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <p className="title">&lt;Button size="sm" /&gt;</p>
          <Button text="Default" buttonColor="primary" size="sm" />
        </div>

        <div className="flex-item">
          <p className="title">&lt;Button size="md" /&gt;</p>
          <Button text="Default" buttonColor="primary" size="md" />
        </div>

        <div className="flex-item">
          <p className="title">&lt;Button size="lg" /&gt;</p>
          <Button text="Default" buttonColor="primary" size="lg" />
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <p className="title">&lt;Button color="default" /&gt;</p>
          <Button text="Default" />
        </div>

        <div className="flex-item">
          <p className="title">&lt;Button size="primary" /&gt;</p>
          <Button text="Primary" buttonColor="primary" />
        </div>

        <div className="flex-item">
          <p className="title">&lt;Button size="lg" /&gt;</p>
          <Button text="Secondary" buttonColor="secondary" />
        </div>

        <div className="flex-item">
          <p className="title">&lt;Button size="lg" /&gt;</p>
          <Button text="Danger" buttonColor="danger" />
        </div>
      </div>

      <p className="title">&:hover, &:focus</p>
      <div className="flex-container">
        <div className="flex-item">
          <Button text="Default" hover hoverColor="#AEAEAE" />
        </div>

        <div className="flex-item">
          <Button
            text="Primary"
            buttonColor="primary"
            hover
            hoverColor="#0039CB"
          />
        </div>

        <div className="flex-item">
          <Button
            text="Secondary"
            buttonColor="secondary"
            hover
            hoverColor="#1C313A"
          />
        </div>

        <div className="flex-item">
          <Button
            text="Danger"
            buttonColor="danger"
            hover
            hoverColor="#9A0007"
          />
        </div>
      </div>

      <h3>Created by: <a href="https://www.frontendmentor.io/profile/NitiMittal" target="_blank" rel="noreferrer">Niti Mittal</a></h3>
    </AppContainer>
    </ThemeProvider>
  );
}

export default App;
