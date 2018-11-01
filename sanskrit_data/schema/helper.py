# from vedavaapi.object_db import mongo, mydb


class MyDbCollectionAdapter(object):

    @classmethod
    def update_doc(cls, mdc, doc):
        if '_id' in doc:
            filter_dict = {'_id': doc['_id']}
            doc.pop('_id', None)
        else:
            filter_dict = doc

        updated_doc = mdc.find_one_and_update(filter_dict, {'$set': doc}, upsert=True, return_doc='after')
        return updated_doc
