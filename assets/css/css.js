import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    margin: 30,
    padding: 30
  },
  darkbg: {
    backgroundColor: "#333"
  },
  login_logomarca: {
    marginBottom: 10,
  },
  login_msg: {
    fontWeight: "bold",
    fontSize: 22,
    color: 'red',
    marginTop: 5,
    marginBottom: 15
  },
  login_form: {
    width: "80%",
  },
  login_input: {
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15
  },
  login_button: {
    padding: 12,
    backgroundColor: '#72a7fc',
    alignSelf: 'center',
    borderRadius: 5
  },
  login_buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333'
  }
});

export { css };
