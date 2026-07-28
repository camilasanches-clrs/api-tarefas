
import { Tarefa } from "../interfaces/tarefas.interface";

const tarefas: Tarefa[] = [];

export function createTarefa(title: string): Tarefa {
    const id = Math.floor(Math.random() * 1000000);
    const tarefa: Tarefa = { id, title, completed: false };
    tarefas.push(tarefa);
    return tarefa;
}

export function listTarefas(completed?: boolean): Tarefa[] {
    if(completed !== undefined){
        return tarefas.filter((tarefa) => tarefa.completed === completed);
    }
    return tarefas;
}

export function getTarefaById(id: number): Tarefa | undefined {
    return tarefas.find((tarefa) => tarefa.id === id);
}

export function updateTarefa(id: number, dados: { title?: string; completed?: boolean }): Tarefa | undefined {
    const tarefa = getTarefaById(id);
    if (tarefa) {
        if (dados.title !== undefined) {
            tarefa.title = dados.title;
        }
        if (dados.completed !== undefined) {
            tarefa.completed = dados.completed;
        }
    }
    return tarefa;
}

export function deleteTarefa(id: number): boolean {
    const index = tarefas.findIndex((tarefa) => tarefa.id === id);

    if (index !== -1) {
        tarefas.splice(index, 1);
        return true;
    }

    return false;
}