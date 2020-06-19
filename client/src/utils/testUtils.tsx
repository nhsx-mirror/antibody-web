import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import messages from 'i18n/index';
import { flatten } from 'flat';
import AppContext from 'components/App/context';

export const renderWithReactIntl = component => {
  return render(<IntlProvider
    locale="en-gb"
    messages={flatten(messages["en-gb"])}>
    {component}
  </IntlProvider>);
};

export const renderWithStubAppContext = component => {
  const appContext = {
    state: { locale: "en-gb" },
    setLocale: () => { },
    setAppError: () => { },
    dispatch: () => { },
    container: {
      getLogin: () => () => { },
      getTestApi: () => ({
        generateTest: () => ({ testRecord: { timerStartedAt: 10 } })
      })
    }
  };

  return render(
    <AppContext.Provider value={appContext} >
      <IntlProvider
        locale="en-gb"
        messages={flatten(messages["en-gb"])}>
        {component}
      </IntlProvider>
    </AppContext.Provider >
  );
};