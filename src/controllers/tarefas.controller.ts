import { Request, Response } from 'express';
import * as tarefaService from '../services/tarefas.service';

export async function createTarefa(req: Request, res: Response): Promise<void> {
    const title = req.body.title;
    const tarefaCriada = await tarefaService.createTarefa(title);
    res.status(201).json(tarefaCriada);

}

export async function listTarefas(req: Request, res: Response): Promise<void> {
    let completed: boolean | undefined = undefined;
    if(req.query.completed === "true"){
         completed = true;
    } else if (req.query.completed === "false"){
         completed = false;
    }
    const tarefas = await tarefaService.listTarefas(completed);
    res.status(200).json(tarefas);
}

export async function getTarefaById(req: Request, res: Response): Promise<void> {
    const id = parseFloat(req.params.id as string);
    const tarefa = await tarefaService.getTarefaById(id);
    if (tarefa) {
        res.status(200).json(tarefa);
    
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada'});
    }
}

export async function updateTarefa(req: Request, res: Response): Promise<void>{
    const id = parseFloat(req.params.id as string);
    const dados = req.body;
    const tarefaAtualizada = await tarefaService.updateTarefa(id, dados);
    if (tarefaAtualizada) {
        res.status(200).json(tarefaAtualizada);
    
    } else {
        res.status(404).json({ message: 'Tarefa não alterada'});
    }
}

export async function deleteTarefa(req: Request, res: Response): Promise<void> {
    const id = parseFloat(req.params.id as string);
    const tarefaDeletada = await tarefaService.deleteTarefa(id);

    if (tarefaDeletada) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Tarefa não deletada'});
    }

}