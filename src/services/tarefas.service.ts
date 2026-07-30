import { Task } from "../../generated/prisma/client";
import prisma from "../config/prismaClient";


export async function createTarefa(title: string): Promise<Task> {
    
    return await prisma.task.create({
        data: { title: title }
    });
}

export async function listTarefas(completed?: boolean): Promise<Task[]> {
    if(completed !== undefined){
        return await prisma.task.findMany({where: {completed}});
    }
    return await prisma.task.findMany();
}

export async function getTarefaById(id: number): Promise<Task | undefined >{
    const tarefa = await prisma.task.findUnique({ where: {id}});
    return tarefa ?? undefined;
}

export async function updateTarefa(id: number, dados: { title?: string; completed?: boolean }): Promise<Task | undefined >{
    const tarefa = await getTarefaById(id);
    if(!tarefa){
        return undefined;
    }
    return await prisma.task.update({ where: {id}, data: dados});
}

export async function deleteTarefa(id: number): Promise< boolean> {
    const tarefa = await getTarefaById(id);
    if(!tarefa){
        return false;
    }
    await prisma.task.delete({ where: { id } });
    return true;


}