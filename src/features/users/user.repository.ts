// Should be put on separate file 'user.repository.ts'
export interface userRepository {
    getUser(id: string): Promise<string>
}

//Should be put on separate file 'prisma-user.repository.ts'
export class PrismaUserRepository implements userRepository {
    async getUser(id: string) {
        return `This is Prisma repository ${id}`
    }
}

// To transition to mongodb
// export class MongoUserRepository implements userRepository {}
