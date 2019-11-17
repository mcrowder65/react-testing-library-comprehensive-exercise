Now that I have shown you an example of creating a render abstraction on top of
react testing library's render, let's have you implement your own abstraction on
top of react testing library with different providers. 

Let's look at the implementation of this login dialog.

Here you can see that we are using material ui, react router, and react intl,
all of which require react context providers.

Let's look at the test of login.js.

We have some different things that we want to test

First is that the component renders.

Second, we want to ensure that the login api function gets called with username and
password when they are entered into the dialog.

Third, we want to ensure that when clicking on the forgot password link, it will
link us to /reset-password.

As you can see in all of these tests, the unfortunate thing is that we have three providers
here. 

Using what I taught you previously, abstract these providers into a utility render function,
that you can use in place of react-testing-library's render method, so that we don't have to
repeat all of these providers over and over again in our tests.
