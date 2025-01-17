document.addEventListener('DOMContentLoaded', () => {
  const kitContainer = document.querySelector('.kit-container') as HTMLElement;
  const panelContent = document.querySelector('.panel-content') as HTMLElement;
  const textElements = document.querySelectorAll<HTMLElement>('.panel-content *');

  const accentButtons = document.querySelectorAll<HTMLButtonElement>('[id="blue"], [id="dark-blue"], [id="pink"], [id="red"], [id="orange"], [id="green"]');

  accentButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const color = getComputedStyle(button).backgroundColor;
      kitContainer.style.backgroundColor = color;

      accentButtons.forEach((btn) => btn.setAttribute('aria-selected', 'false'));
      button.setAttribute('aria-selected', 'true');
    });
  });

  const modeButtons = document.querySelectorAll<HTMLButtonElement>('[id="white"], [id="gray"], [id="black"]');

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const color = getComputedStyle(button).backgroundColor;
      panelContent.style.backgroundColor = color;

      textElements.forEach((textElement) => {
        if (color === 'rgb(255, 255, 255)') {
          textElement.style.color = 'black';
        } else if (color === 'rgb(128, 128, 128)' || color === 'rgb(0, 0, 0)') {
          textElement.style.color = 'white';
        }
      });

      modeButtons.forEach((btn) => btn.setAttribute('aria-selected', 'false'));
      button.setAttribute('aria-selected', 'true');
    });
  });

  const radiusButtons = document.querySelectorAll<HTMLButtonElement>('[id="size-l"], [id="size-m"], [id="size-s"], [id="size-non"]');

  radiusButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let radiusValue: string;

      switch (button.id) {
        case 'size-l':
          radiusValue = '15px';
          break;
        case 'size-m':
          radiusValue = '10px';
          break;
        case 'size-s':
          radiusValue = '5px';
          break;
        case 'size-non':
          radiusValue = '0px';
          break;
        default:
          radiusValue = '15px';
      }

      panelContent.style.borderRadius = radiusValue;

      radiusButtons.forEach((btn) => btn.setAttribute('aria-selected', 'false'));
      button.setAttribute('aria-selected', 'true');
    });
  });

  const defaultAccentButton = document.querySelector<HTMLButtonElement>('#blue')!;
  defaultAccentButton.click();

  const defaultModeButton = document.querySelector<HTMLButtonElement>('#white')!;
  defaultModeButton.click();

  const defaultRadiusButton = document.querySelector<HTMLButtonElement>('#size-l')!;
  defaultRadiusButton.click();
});
