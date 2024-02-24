import executionByCommandName from "./command-service";

export default function submitCommand(commandLine: string): Promise<string> {
  const arrayCommand = commandLine.split(" ");
  const command = arrayCommand[0];
  const parameter = arrayCommand.length > 1 ? arrayCommand[1] : "";
  const execution = executionByCommandName.get(command);
  if (!execution) {
    // TODO: use Error
    return new Promise((resolve, reject) => resolve("MESSAGE ERREUR"));
  }
  return execution(parameter);
  // TODO: algo:
  // - Check si la command suit le format "{command}" ou "{command} {parameter}" sinon envoyer message basique
  // - Extraire command
  // - Extraire parameter et vérifier le type
  //   - Si la commande existe et que le paramètre est bon: lancer la commande, si la commande est bonne,
  //     formater la réponse puis la renvoyer.
  //   - Si le parametre n'est pas bon: renvoyer le help de la commande entier
  //   - Si la commande n'existe pas, envoyer le message d'erreur
  //   - Si une erreur est renvoyée par l'execution de la commande, envoyer le help de la command et du parametre
}
