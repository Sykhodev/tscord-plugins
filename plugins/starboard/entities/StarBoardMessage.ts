import { Entity, PrimaryKey, Property, EntityRepositoryType, ManyToOne, Loaded } from '@mikro-orm/core'
import { EntityRepository } from '@mikro-orm/sqlite'

import { CustomBaseEntity} from '@/entities'
import { StarBoard } from './StarBoard'

// ===========================================
// ================= Entity ==================
// ===========================================

@Entity()
export class StarBoardMessage extends CustomBaseEntity {

    [EntityRepositoryType] = StarBoardMessageRepository

    @PrimaryKey({ autoincrement: false })
    srcMessage! :string
    
    @Property()
    starboardMessage!: string
    
    @Property({ nullable: true })
    starboardChannel?: string

    @Property()
    starCount!: number

    @ManyToOne()
    starboard: StarBoard

}

// ===========================================
// =========== Custom Repository =============
// ===========================================

export class StarBoardMessageRepository extends EntityRepository<StarBoardMessage> {
	static getEntityManager: any
	persistAndFlush(arg0: Loaded<StarBoardMessage, never, "*" | "starboardChannel", never>[]) {
		throw new Error('Method not implemented.')
	} 

}