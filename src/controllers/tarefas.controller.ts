import { Request, Response } from 'express';
import * as tarefaService from '../services/tarefas.service';

export function createTarefa(req: Request, res: Response): void {
    const title = req.body.title;
    const tarefaCriada = tarefaService.createTarefa(title);
    res.status(201).json(tarefaCriada);

}

export function listTarefas(req: Request, res: Response): void {
    const tarefas = tarefaService.listTarefas();
    res.status(200).json(tarefas);
}

export function getTarefaById(req: Request, res: Response): void {
    const id = parseFloat(req.params.id as string);
    const tarefa = tarefaService.getTarefaById(id);
    if (tarefa) {
        res.status(200).json(tarefa);
    
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada'});
    }
}

export function updateTarefa(req: Request, res: Response): void {
    const id = parseFloat(req.params.id as string);
    const dados = req.body;
    const tarefaAtualizada = tarefaService.updateTarefa(id, dados);
    if (tarefaAtualizada) {
        res.status(200).json(tarefaAtualizada);
    
    } else {
        res.status(404).json({ message: 'Tarefa não alterada'});
    }
}

export function deleteTarefa(req: Request, res: Response): void {
    const id = parseFloat(req.params.id as string);
    const tarefaDeletada = tarefaService.deleteTarefa(id);

    if (tarefaDeletada) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Tarefa não deletada'});
    }

}