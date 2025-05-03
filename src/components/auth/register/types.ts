
import { z } from "zod";

export const registerSchema = z.object({
  nome: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  sobrenome: z.string().min(2, { message: "O sobrenome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  cpf: z.string().min(11, { message: "CPF deve ter 11 dígitos" }),
  telefone: z.string().min(8, { message: "Telefone inválido" }),
  diaAniversario: z.string(),
  mesAniversario: z.string(),
  anoAniversario: z.string(),
  senha: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
  confirmSenha: z.string(),
  codigoArea: z.string().default("+55"),
  termos: z.boolean().refine((value) => value === true, {
    message: "Você deve aceitar os termos e condições",
  }),
  aceitaEmailMarketing: z.boolean().default(false),
  aceitaSMSMarketing: z.boolean().default(false),
}).refine((data) => data.senha === data.confirmSenha, {
  message: "As senhas não coincidem",
  path: ["confirmSenha"],
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
