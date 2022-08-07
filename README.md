# CLI - application "Contacts"

This project is simple cli - app to work with contacts.

## Getting Started

To run this project, install it locally using npm:
```
$ npm install

```

## Usage
### Comand line tool that has 4 action
Read all contacts: 
```
node index.js --action list

```

action - list https://monosnap.com/file/20tVsiCmVBAYmfLOtFx9Qi2oLLlp7F

Get contact by id:

```
node index.js --action get --id 5

```

action - get https://monosnap.com/file/yHqc66GHRE4VoBABISS4VUXis9WVMn

Add new contact:

```
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

```

action - add https://monosnap.com/file/Yhsh7w6XRhlv0exUvyH7HEZisMN8lX

Remove contact by id:

```
node index.js --action remove --id 3

```

action - remove https://monosnap.com/file/I1ESIPq7ftkF9FtGJp34OJRgZtwJ8T
