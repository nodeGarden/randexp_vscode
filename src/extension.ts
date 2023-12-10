import * as vscode from 'vscode';
import RandExp from 'randexp';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.createRandomValueByRegex', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('No editor is active');
      return;
    }

    const regexInput = await vscode.window.showInputBox({
      prompt: 'Enter a Regular Expression',
    });

    if (regexInput) {
      try {
        const randexp = new RandExp(regexInput);
        const randomValue = randexp.gen();

        editor.edit((editBuilder) => {
          if (editor.selection.isEmpty) {
            editBuilder.insert(editor.selection.start, randomValue);
          } else {
            editBuilder.replace(editor.selection, randomValue);
          }
        });
      } catch (error) {
        vscode.window.showErrorMessage('Invalid Regular Expression');
      }
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
