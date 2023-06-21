import React from 'react';

import InboxScreen from './InboxScreen';
import store from '../lib/store';
import { rest } from 'msw';
import { MockedState } from './TaskList.stories';
import { Provider } from 'react-redux';

import {
    fireEvent,
    within,
    waitFor,
    waitForElementToBeRemoved
} from '@storybook/testing-library'

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = () => <InboxScreen />;

export const Default = Template.bind({});
Default.parameters = {
    msw: {
        handlers: [
            rest.get(
                'https://jsonplaceholder.typicode.com/todos?userId=1',
                (req, res, ctx) => {
                    return res(ctx.json(MockedState.tasks));
                }
            )
        ]
    }
}

Default.play = async ({canvasElement}) => {
    const canvus = within(canvasElement);
    await waitForElementToBeRemoved(await canvus.findByTestId('loading'));
    await waitFor(async () => {
        await fireEvent.click(canvus.getByLabelText('pinTask-3'));
        await fireEvent.click(canvus.getByLabelText('pinTask-6'));
    })
}

export const Error = Template.bind({});
Error.parameters = {
    msw: {
        handlers: [
            rest.get(
                'https://jsonplaceholder.typicode.com/todos?userId=1',
                (req, res, ctx) => {
                    return res(ctx.status(403));
                }
            )
        ]
    }
}