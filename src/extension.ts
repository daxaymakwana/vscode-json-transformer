// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { mapHandler } from './handlers/map-handler';
import { convertToJson } from './utils/basic';
import { validateInput } from './validators/validate-input';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "new-gen-json-transformer" is now active!');

  let jsonData = convertToJson(vscode.window.activeTextEditor?.document.getText() || '');

  if (!validateInput(jsonData)) {
    vscode.window.showErrorMessage('Your current opened window does not contain valid JSON data');
    return;
  }

  jsonData = jsonData;

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('new-gen-json-transformer.run-transformer', mapHandler);

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
