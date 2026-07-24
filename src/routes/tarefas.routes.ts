import {Router} from "express";
import * as tarefaController from "../controllers/tarefas.controller"

const router = Router();

router.post("/", tarefaController.createTarefa);
router.put("/:id", tarefaController.updateTarefa);
router.get("/", tarefaController.listTarefas);
router.delete("/:id", tarefaController.deleteTarefa);
router.get("/:id", tarefaController.getTarefaById);

export default router;
