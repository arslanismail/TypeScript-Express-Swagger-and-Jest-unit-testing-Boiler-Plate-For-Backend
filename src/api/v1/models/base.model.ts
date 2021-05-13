import IBaseModel from './interfaces/IBaseModel';
import { v4 as uuidv4 } from 'uuid';
import DB from '../../../config/db/index';
export default class BaseModel implements IBaseModel {
	DB: any;
	constructor() {
		this.DB = DB;
	}

	getTableName(): any {
		enum Table {
			User = 'CDT_Users',
			Document = 'CDT_AdditionalDocs',
			Passport = 'CDT_PassportData',
			IdDetails = 'CDT_IdDetails',
			SecurityQuestions = 'CDT_SecurityQuestions',
			UserPassword = 'CDT_UserPasswords',
			Log = 'CDT_Logs',
			Country = 'CDT_Country',
			Currency = 'CDT_Currencies',
			FatcaCrs = 'CDT_FatcaCrs',
			BankTransaction = 'CDT_AgentQuestionaireResponse',
			QuestionaireResponse = 'CDT_QuestionaireResponse',
			AdditionalFields = 'CDT_AdditionalFieldsResp',
			ReferralTransaction = 'CDT_ReferredTransaction',
			BenefitPay = 'CDT_BenefitPay',
			BenefitPayTransaction = 'CDT_BenefitPayTransaction',
		}
		return Table;
	}

	assignId(): string {
		return uuidv4();
	}
}
